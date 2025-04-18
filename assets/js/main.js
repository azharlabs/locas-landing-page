document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Demo functionality (if on the home page)
    const demoForm = document.getElementById('demo-form');
    if (demoForm) {
        const queryInput = document.getElementById('query-input');
        const loadingState = document.getElementById('loading-state');
        const resultPanel = document.getElementById('result-panel');
        
        // Example queries click event
        document.querySelectorAll('.example-query').forEach(button => {
            button.addEventListener('click', function() {
                queryInput.value = this.textContent.trim();
            });
        });
        
        // Form submission
        demoForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const query = queryInput.value.trim();
            
            if (!query) return;
            
            // Show loading state
            loadingState.classList.remove('hidden');
            resultPanel.classList.add('hidden');
            
            // Simulate API call with timeout
            setTimeout(() => {
                // Hide loading state
                loadingState.classList.add('hidden');
                
                // Process result based on query
                processResult(query);
                
                // Show result panel
                resultPanel.classList.remove('hidden');
            }, 2000);
        });
    }
    
    // Handle mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
});

// Demo result processing function
function processResult(query) {
    const resultTitle = document.getElementById('result-title');
    const resultLocation = document.getElementById('result-location');
    const ratingsContainer = document.getElementById('ratings-container');
    const overallRating = document.getElementById('overall-rating');
    const resultSummary = document.getElementById('result-summary');
    const servicesUsed = document.getElementById('services-used');
    
    if (!resultTitle) return; // Not on the home page
    
    let data = {};
    
    // Land purchase query
    if (query.toLowerCase().includes('land')) {
        data = {
            title: 'Land Purchase Analysis',
            location: 'Near specified location',
            ratings: [
                { factor: 'Essential Services', rating: 9, description: 'Excellent access to schools, hospitals, and police' },
                { factor: 'Amenities', rating: 10, description: 'Outstanding selection of shops, restaurants, and entertainment' },
                { factor: 'Transportation', rating: 8, description: 'Multiple subway stations and bus routes nearby' },
                { factor: 'Environmental Factors', rating: 7, description: 'Good air quality, access to green spaces' }
            ],
            overallRating: 8.5,
            summary: 'This is a prime location for land purchase with excellent amenities and services. However, property values are likely to be very high in this area.',
            services: ['GPT-4o', 'Google Places API', 'Environmental Service', 'Land Analyzer']
        };
    }
    // Business-related query
    else if (query.toLowerCase().includes('coffee') || query.toLowerCase().includes('restaurant') || query.toLowerCase().includes('business')) {
        data = {
            title: 'Business Viability Analysis',
            location: 'Near specified location',
            ratings: [
                { factor: 'Customer Traffic', rating: 8, description: 'High pedestrian traffic in this area' },
                { factor: 'Competition', rating: 6, description: '3 similar businesses within 0.5 miles' },
                { factor: 'Demographics', rating: 9, description: 'Target customers present in high numbers' },
                { factor: 'Location Accessibility', rating: 7, description: 'Good public transport, limited parking' }
            ],
            overallRating: 7.5,
            summary: 'This location shows good potential for a business with high foot traffic and favorable demographics. However, be aware of competition in the area.',
            services: ['GPT-4o', 'Google Places API', 'Environmental Service', 'Business Analyzer']
        };
    }
    // Park or amenity query
    else if (query.toLowerCase().includes('park') || query.toLowerCase().includes('school') || query.toLowerCase().includes('hospital')) {
        data = {
            title: 'Nearby Places Analysis',
            location: 'Near specified location',
            ratings: [
                { factor: 'Quantity', rating: 8, description: 'Multiple options available within 1 mile' },
                { factor: 'Quality', rating: 9, description: 'High-rated facilities with good reviews' },
                { factor: 'Accessibility', rating: 7, description: 'Easily accessible by public transportation' }
            ],
            overallRating: 8.0,
            summary: 'There are several high-quality options in the vicinity. The area has excellent access to the amenities you searched for.',
            services: ['GPT-4o', 'Google Places API', 'Location Parser']
        };
    }
    // Default response
    else {
        data = {
            title: 'Location Analysis',
            location: 'Near specified location',
            ratings: [
                { factor: 'Overall Rating', rating: 7, description: 'Good location with standard amenities' }
            ],
            overallRating: 7.0,
            summary: 'We found some information about your location, but for more specific insights, try including keywords like "land", "business", or specific amenities.',
            services: ['GPT-4o', 'Google Places API']
        };
    }
    
    // Update UI with result
    resultTitle.textContent = data.title;
    resultLocation.textContent = data.location;
    
    // Clear and repopulate ratings
    ratingsContainer.innerHTML = '';
    data.ratings.forEach(rating => {
        const ratingEl = document.createElement('div');
        ratingEl.className = 'bg-white p-3 rounded border';
        ratingEl.innerHTML = `
            <div class="flex justify-between items-center mb-1">
                <span class="font-medium">${rating.factor}</span>
                <div class="px-2 py-1 bg-indigo-100 text-indigo-800 rounded text-sm font-medium">
                    ${rating.rating}/10
                </div>
            </div>
            <p class="text-sm text-gray-600">${rating.description}</p>
        `;
        ratingsContainer.appendChild(ratingEl);
    });
    
    overallRating.textContent = `${data.overallRating}/10`;
    resultSummary.textContent = data.summary;
    
    // Update services used
    servicesUsed.innerHTML = '';
    const colors = {
        'GPT-4o': 'blue',
        'Google Places API': 'green',
        'Environmental Service': 'purple',
        'Land Analyzer': 'red',
        'Business Analyzer': 'yellow',
        'Location Parser': 'pink'
    };
    
    data.services.forEach(service => {
        const color = colors[service] || 'gray';
        const serviceEl = document.createElement('div');
        serviceEl.className = `px-2 py-1 bg-${color}-50 text-${color}-700 text-xs rounded border border-${color}-100 flex items-center`;
        serviceEl.innerHTML = `
            <span class="w-2 h-2 bg-${color}-500 rounded-full mr-1"></span>${service}
        `;
        servicesUsed.appendChild(serviceEl);
    });
}
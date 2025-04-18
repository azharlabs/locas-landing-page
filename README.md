# Locas - Jekyll Website

This is the Jekyll-based website for Locas, an Open Source AI Location Orchestrator.

## Directory Structure

```
.
├── _authors/              # Author profiles
│   └── team.md            # Team author profile
├── _config.yml            # Site configuration
├── _data/                 # Data files
├── _includes/             # Reusable components
│   ├── components/        # Custom components
│   │   └── callout.html   # Callout component for highlighting content
│   ├── footer.html        # Site footer
│   ├── header.html        # Site header
│   └── toc.html           # Table of contents generator
├── _layouts/              # Page layouts
│   ├── author.html        # Author page layout
│   ├── default.html       # Default page layout
│   └── post.html          # Post page layout
├── _posts/                # Blog posts
│   └── 2025-04-01-intro-to-locas.md  # Example post
├── assets/                # CSS, JavaScript, images
│   ├── css/
│   │   └── styles.css     # Custom styles
│   └── js/
│       └── main.js        # Custom scripts
├── blog/                  # Blog index pages
│   └── index.html         # Blog main page
├── images/                # Image files
│   ├── authors/           # Author avatars
│   ├── blog/              # Blog post images
│   ├── favicon.png        # Site favicon
│   └── logo.png           # Site logo
├── .gitignore             # Git ignore file
├── CNAME                  # Custom domain name
├── Gemfile                # Ruby dependencies
├── index.html             # Homepage
└── README.md              # Project documentation
```

## Installation Instructions

### Setting up Ruby with rbenv (Recommended)

1. Install rbenv and ruby-build:
   ```bash
   # On macOS
   brew install rbenv ruby-build
   
   # Add to your shell
   echo 'eval "$(rbenv init - bash)"' >> ~/.bashrc  # or ~/.zshrc if using zsh
   source ~/.bashrc  # or ~/.zshrc
   ```

2. Install Ruby and Jekyll:
   ```bash
   # Install Ruby
   rbenv install 3.0.0
   rbenv global 3.0.0
   
   # Verify installation
   ruby -v
   
   # Install Jekyll and Bundler
   gem install jekyll bundler
   ```

3. Clone the repository and navigate to it:
   ```bash
   git clone https://github.com/azharlabs/locas-landing-page.git
   cd locas-landing-page
   ```

4. Install dependencies:
   ```bash
   bundle install
   ```

5. Start the server:
   ```bash
   bundle exec jekyll serve --livereload
   ```

6. Visit `http://localhost:4000` in your browser.

### Alternative: Using System Ruby (Not Recommended)

If you're having issues with the system Ruby, try:

```bash
sudo gem install bundler jekyll
sudo bundle install
bundle exec jekyll serve
```

## Troubleshooting

### Common Issues

1. **Google Protobuf Error**:
   ```
   LoadError: cannot load such file -- google/protobuf_c
   ```
   
   **Solution**: Update your Gemfile to use a specific protobuf version:
   ```ruby
   gem "google-protobuf", "~> 3.21.12"
   gem "jekyll-sass-converter", "~> 2.0"
   ```
   
2. **Permission Issues**:
   If you see permission errors, you're likely using the system Ruby. Use rbenv or RVM instead.

## Usage Instructions

1. To add a new blog post, create a file in the `_posts` directory following the naming pattern:
   ```
   YYYY-MM-DD-title.md
   ```
   
2. To add a new author, create a file in the `_authors` directory:
   ```
   username.md
   ```

3. For GitHub Pages deployment, push to the main branch. GitHub will automatically build and deploy the site.

## Site Features

The site is optimized for SEO and includes proper metadata, structured data, and semantic HTML to ensure good ranking in search engines.

- Responsive design with Tailwind CSS
- Blog functionality with posts and authors
- Component-based architecture
- SEO-optimized with Jekyll SEO Tag plugin
- Fast load times with minified CSS/JS
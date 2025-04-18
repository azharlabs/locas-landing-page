# Setting Up Your Jekyll Site

## Fixing the Error with Google Protobuf

The error you're seeing is a common issue on macOS with the system Ruby installation and the Google Protobuf gem:

```
LoadError: cannot load such file -- google/protobuf_c
```

## Recommended Solution: Use rbenv (Ruby Version Manager)

Using rbenv allows you to manage Ruby versions without affecting your system Ruby. This is the recommended approach to avoid permission issues.

### Step 1: Install rbenv and ruby-build

```bash
# Install Homebrew if you don't have it
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install rbenv and ruby-build
brew install rbenv ruby-build

# Set up rbenv in your shell
echo 'eval "$(rbenv init - zsh)"' >> ~/.zshrc  # For zsh
# OR
echo 'eval "$(rbenv init - bash)"' >> ~/.bashrc  # For bash

# Restart your shell
source ~/.zshrc  # For zsh
# OR
source ~/.bashrc  # For bash
```

### Step 2: Install Ruby Using rbenv

```bash
# List available Ruby versions
rbenv install -l

# Install Ruby 3.0.0 (recommended for Jekyll)
rbenv install 3.0.0

# Set it as your default Ruby
rbenv global 3.0.0

# Verify the installation
ruby -v  # Should show Ruby 3.0.0
which ruby  # Should show a path in your home directory, not /usr/bin/ruby
```

### Step 3: Install Jekyll and Bundler

```bash
# Install Jekyll and Bundler
gem install jekyll bundler

# Verify installations
jekyll -v
bundler -v
```

### Step 4: Set Up Your Jekyll Site

```bash
# Navigate to your project directory
cd /Users/azhar/code/experiments/locas/landing_page/locas-landing-page

# Install dependencies
bundle install

# Start the Jekyll server
bundle exec jekyll serve --livereload
```

## Alternative Solution: Fix the System Ruby Installation

If you prefer to use the system Ruby, you'll need to use sudo for gem installations:

```bash
# Install bundler and jekyll
sudo gem install bundler jekyll

# Install dependencies
sudo bundle install

# Start the Jekyll server
bundle exec jekyll serve --livereload
```

## Deploying to GitHub Pages

The repository is already set up with GitHub Actions workflow in `.github/workflows/github-pages.yml`. To deploy:

1. Push your changes to the main branch:
   ```bash
   git add .
   git commit -m "Convert site to Jekyll template"
   git push origin main
   ```

2. GitHub Actions will automatically build and deploy your site to the gh-pages branch.

3. Configure GitHub Pages in your repository settings to serve from the gh-pages branch.

## Adding Content

### Adding Blog Posts

1. Create a new Markdown file in the `_posts` directory following the naming pattern: `YYYY-MM-DD-title.md`

2. Add front matter at the top of the file:
   ```yaml
   ---
   layout: post
   title: "Your Post Title"
   date: YYYY-MM-DD
   author: team
   featured_image: /images/blog/your-image.jpg
   tags: [tag1, tag2]
   ---
   
   Your content here in Markdown format.
   ```

### Adding Authors

1. Create a new Markdown file in the `_authors` directory: `username.md`

2. Add front matter:
   ```yaml
   ---
   name: Author Name
   position: Job Title
   avatar: /images/authors/username.jpg
   github: github-username
   ---
   
   Author bio in Markdown format.
   ```

## Customizing Your Site

- Edit `_config.yml` to update site-wide settings
- Modify layouts in the `_layouts` directory
- Update includes in the `_includes` directory
- Add or modify styles in `assets/css/styles.css`
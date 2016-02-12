###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page "/path/to/file.html", layout: :otherlayout

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", locals: {
#  which_fake_page: "Rendering a fake page with a local variable" }

# General configuration
require 'builder'
page "/sitemap.xml", layout: false

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload, livereload_css_target: 'stylesheets/main.css.scss'
  activate :autoprefixer do |config|
    config.browsers = ['last 3 versions', 'Explorer >= 9']
  end
end

# Turn this on if you want to make your url's prettier, without the .html
activate :directory_indexes

# Automatic image dimensions on image_tag helper
activate :automatic_image_sizes

###
# Helpers
###

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

# Build-specific configuration
configure :build do

  # Minify CSS on build
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  # Enable cache buster
  activate :asset_hash

  # Use relative URLs
  activate :relative_assets

  activate :autoprefixer do |config|
    config.browsers = ['last 3 versions', 'Explorer >= 9']
  end
end

activate :i18n

# Evil icons https://github.com/outpunk/evil-icons
require 'evil_icons'
helpers EvilIcons::Helpers
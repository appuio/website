###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# General configuration
require 'builder'

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload, livereload_css_target: 'stylesheets/main.css.scss'
  activate :autoprefixer do |config|
    config.browsers = ['last 3 versions', 'Explorer >= 9']
  end
end

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
activate :automatic_image_sizes


# Evil icons https://github.com/outpunk/evil-icons
require 'evil_icons'
helpers EvilIcons::Helpers

# Redirects
# sadly doesnt work for I18n
# redirect "/offers/", to: "/index.html"


###
# Helpers
###
helpers do
  def nav_active(path)
    current_page.path == path ? "active" : ""
  end
end
# Would theoretically create class for pages - but doesnt work yet - source: https://benfrain.com/understanding-middleman-the-static-site-generator-for-faster-prototyping/
# def page_classes
#   path = request.path_info.dup
#   path < < settings.index_file if path.match(%r{/$})
#   path = path.gsub(%r{^/}, '')
#
#   classes = []
#   parts = path.split('.')[0].split('/')
#   parts.each_with_index { |path, i| classes << parts.first(i+1).join('_') }
#
#   classes.join('')
# end

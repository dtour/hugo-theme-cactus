## Cactus

My own modified version of monkeyWzr's [hugo-theme-cactus](https://github.com/monkeyWzr/hugo-theme-cactus)

Example site can be found https://dhirajtourani.com/

## Install

1. clone cactus to your hugo site's `themes` folder.
```
git clone https://github.com/dtour/hugo-theme-cactus.git themes/cactus
```

2. change your theme to cactus in your site config
```toml
# config.toml

theme = "cactus"
```

3. config your site. See [Config] or a [complete config sample](exampleSite/config.toml)
4. test your site
```
hugo server
```

5. publish your site in your prefered way. See hugo's doc: [Hosting & Deployment](https://gohugo.io/hosting-and-deployment/)

## Config

### Color themes

```toml
[params]

  colortheme = "white" # dark, light, white, or classic
```

### Custom CSS

```toml
[params]
  css = ["css/custom.css"]
```

You can add multiple custom stylesheets which will be loaded after the main theme css.
For example, the above line will load the CSS-file placed at `/static/css/custom.css`.

### Logo and Favicon

Add your own logo (shown in the header) and favicon.

```toml
[params]
  # Path under /static, e.g. /static/images/mylogo.png
  logo = "images/mylogo.png"
  favicon = "images/myfavicon.svg"
```

### Navigation

```toml
# Main menu which appears below site header.
[[menu.main]]
name = "Home"
url = "/"
weight = 1

[[menu.main]]
name = "All posts"
url = "/posts"
weight = 2

[[menu.main]]
name = "Tags"
url = "/tags"
weight = 3

[[menu.main]]
name = "About"
url = "/about"
weight = 4
```

### Homepage settings

* description: description will be displayed in the homepage. Markdown syntax is supported in the description string.
```toml
[params]

  description = "Hugo is a general-purpose website framework. Technically speaking, Hugo is a static site generator. Unlike systems that dynamically build a page with each visitor request, Hugo builds pages when you create or update your content. Since websites are viewed far more often than they are edited, Hugo is designed to provide an optimal viewing experience for your website’s end users and an ideal writing experience for website authors."
```

* set your main section (used as the link for the "writings" title on the homepage)

```toml
[params]
  mainSection = "posts"
```

* change the default main section title from Writings, to something else:

```toml
[params]
  mainSectionTitle = "Blog"
```

* Show only the 5 most recent posts (default)

```toml
[params]
  showAllPostsOnHomePage = false
  postsOnHomePage = 5
```
* show all posts

```toml
[params]
  showAllPostsOnHomePage = true
  postsOnHomePage = 5 # this option will be ignored
```

* show tagsoverview (default) or not
* 
```toml
[params]
  tagsOverview = true
```

* display the table of contents inline on blog posts, rather than as part of the navigation menu:

```toml
[params]
  tocInline = true
```

* show projects list (default) or not.

```toml
[params]
  showProjectsList = true
  projectsUrl = "https://github.com/monkeyWzr"
```

Projects section will not be shown if no data file is detected. See [Projects list](#projects-list) below.

* show an inline Subscribe block on the homepage

```toml
[params]
  # When enabled, the homepage shows a compact Subscribe block.
  # If substackUrl is provided, a Substack button is shown alongside the RSS icon.
  showSubscribe = true
  substackUrl = "https://your-substack.example.com/subscribe" # optional
```

```toml
[params]
  # Used by the homepage list and RSS to identify your main content sections
  mainSections = ["posts"]
```

### Post metadata

Control metadata shown on post pages and formatting:

```toml
[params]
  # Show author name under the title (falls back to site title if author not set)
  showAuthor = false

  # Customize the date format used across the theme (Go time format)
  dateFormat = "2006-01-02"

  # Show estimated reading time (rounded minutes) on posts
  showReadTime = false

  # Show an "Updated" timestamp when a post's Lastmod differs from Date
  show_updated = true
```

### Projects list

Create your projects data file `data/projects.yaml|toml|json`. Hugo support yaml, toml and json formats.
for former hexo cactus users: please assign your json array to a `list` key.

for example, `data/projects.json`:
```json
{
   "list": [
      {
         "name":"Hexo",
         "url":"https://hexo.io/",
         "desc":"A fast, simple & powerful blog framework"
      },
      {
         "name":"Font Awesome",
         "url":"http://fontawesome.io/",
         "desc":"The iconic font and CSS toolkit"
      }
   ]
}
```

### Social media links

```toml
[[params.social]]
  name = "github"
  link = "https://github.com/monkeyWzr"

[[params.social]]
  name = "email"
  link = "monkeywzr@gmail.com" # no need for "mailto:" at the start

[[params.social]]
  name = "linkedin"
  link = "https://www.linkedin.com/in/monkeywzr/"
```

The `name` key expects the name of a [Font Awesome icon](https://fontawesome.com/icons?d=gallery&s=brands).

### Copyright

Assign your copy right to `.Site.Copyright`. Cactus will append current year to the head.

TODO: Customizable copyright year

```toml
copyright = "Zeran Wu" # cactus theme will use site title if copyright is not set
```

### Comments

Comments is disabled by default. Enable comments in your `.Site.Params`.
```toml
[params]
  [params.comments]
    enabled = true
    # engine = "disqus" # in progress
```

You can also enable/disable comments per post. in your posts' front matter, add:
```yaml
comments: true
```

The site config is ignored when `comments` option exists in front matter.

The default engine is disqus. **By now only disqus is supported in cactus.** I will add more options sooner or later. See [Comments Alternatives](https://gohugo.io/content-management/comments/#comments-alternatives)

Before using disqus, you need to register and get your [disqus shortname](https://help.disqus.com/en/articles/1717111-what-s-a-shortname). Assign your shortname in `.Site.disqusShortname`, or cactus will use `.Site.Title` by default.

```
disqusShortname = "wzr" # cactus will use site title if not set
```

### highlight

Use hugo's built-in [syntax highlighting](https://gohugo.io/getting-started/configuration-markup#highlight).

default config:

```toml
[markup]
  [markup.highlight]
    codeFences = true
    guessSyntax = false
    hl_Lines = ""
    lineNoStart = 1
    lineNos = false
    lineNumbersInTable = true
    noClasses = true
    style = "monokai"
    tabWidth = 4
```

### Analytics

Cactus uses hugo's bulit in analytics templates. Check [hugo's documents](https://gohugo.io/templates/internal#google-analytics) for details.

Set you tracking id in your site config.
```toml
googleAnalytics = "UA-XXXXXXXX-XX" # or G-XXXXXXXX if you are using Google Analytics v4 (gtag.js)
```

If you are using Google Analytics v3 (analytics.js), you can switch to asynchronous tracking by set `params.googleAnalyticsAsync` to `true`.
```toml
[params]
googleAnalyticsAsync = true # not required
```

### RSS

The RSS feed is not generated by default. You can enable it in your site config so the theme exposes an RSS `<link>` in the `<head>` and the homepage Subscribe block shows an RSS icon:

```toml
[params]
  rss = true
```

By default, Hugo's RSS output uses `index.xml`, so the link will be `https://example.com/index.xml` assuming your `baseURL` is set to `https://example.com/`.

Please also check [Configure RSS](https://gohugo.io/templates/rss/#configure-rss)

### Mathjax

Cactus supports mathjax. Just add `mathjax` option in your site config:
```toml
[params]
  mathjax = true  # not required
```

You can also enable/disable mathjax per post. In your posts' front matter, add:
```yaml
mathjax: true # or false
```

The site config will be ignored when `mathjax` option exists in front matter.

### Archive 
Pagination on posts archive can be disabled to show all posts in chronological order

```toml
[params]
  showAllPostsArchive = true # or false (default)
```

## License

MIT

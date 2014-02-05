<!DOCTYPE html>
<html lang="{{ page.language_code }}">
  <head>
    {% include "html-head" %}
    <!-- FACEBOOK OPENGRAPH -->
    <!-- Global opengraph tags are located in "header" component -->
    <meta property="og:url" content="{{ site.url }}{{ article.url }}">
    <meta property="og:title" content="{{ article.title }} — {{ article.excerpt | strip_html }} — {{ page.site_title }}">
    <meta property="og:image" content="{{ site.url }}{{ photos_path }}/{{ page.data.fbimage }}"><!-- TODO: Add image location data tag -->
    <!-- https://developers.facebook.com/tools/debug - Debug after each modification -->
  </head>
  
  <body class="post-page">
    <div class="container cfx">
      {% include "header" %}
  
      <main class="content user-content cfx" role="main">
        <article class="post">
          <header class="post-header">
            <h1 class="post-title">{% editable article.title %}</h1>
            <time datetime="{{ article.created_at | date : "%Y-%m-%d" }}" class="post-date">{{ article.created_at | date : "%b %d, %Y" }}</time>
            {% include "tags-article" %}
          </header>
          <section class="post-content">
            <div class="post-excerpt">{% editable article.excerpt %}</div>
            <div class="post-body">{% editable article.body %}</div>
          </section>
        </article>
      </main>
  
      {% include "footer" %}
    </div>
  
    {% include "javascripts" %}
    <script>project.initArticlePage();</script>
  </body>
</html>
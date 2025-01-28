---
title: "Home"
type: "home"
layout: home
---

Welcome to my Hugo site! Here are the latest posts:

{{ range first 5 .Pages }}
  * [{{ .Title }}]({{ .Permalink }})
{{ end }}

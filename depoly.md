#### Deploy Using gh-pages
<ul>
<li>yarn/npm (add/install) -D gh-pages</li>
  <li>Run build scripts</li>
  <li>Run: gh-pages -d build</li>
</ul>

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"

```

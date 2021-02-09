

## Installation
```
oc create sa github-workflow
oc policy add-role-to-user admin -z github-workflow
oc get serviceAccounts github-workflow -o 'jsonpath={.secrets[*].name}'
oc describe secret github-workflow-token-xxxxx
```
Add the token to the secret `OPENSHIFT_TOKEN`

## Secrets

The following secrets must be configured:
- `OPENSHIFT_TOKEN`
- `REGISTRY_USERNAME`
- `REGISTRY_PASSWORD`
- `OAUTH_CLIENT_ID` Github Oauth App for CMS
- `OAUTH_CLIENT_SECRET`

## Open Issues
[<html> indentation in partial/shortcode wrapped in `<pre><code>`](https://github.com/gohugoio/hugo/issues/6553)<br>
Workaround: use `{{- -}}` everywhere and remove all empty lines

[Shortcodes are not reloading when inner resources are changed](https://github.com/gohugoio/hugo/issues/6177)<br>
Workaround: restart `hugo serve` after changes

Unclosed shortcode uses rest of page as `.Inner` (`{{<shortcode>}}` vs `{{<shortcode/>}}`)<br>
Workaround: be careful

Non-closing shortcodes with `.Inner` use the rest of the page instead of throwing an error<br>
Workaround: count the opening and closing tags and throw an error if not the same. Add shortcode to `mustCloseShortcodes` in `config.toml`. [themes/appuio/layouts/partials/check-must-close-shortcodes.html](https://github.com/appuio/website-new/blob/master/themes/appuio/layouts/partials/check-must-close-shortcodes.html).<br>
TODO: report issue to Hugo or [create pull request](https://github.com/gohugoio/hugo/blob/fdfa4a5fe62232f65f1dd8d6fe0c500374228788/hugolib/shortcode.go#L518)

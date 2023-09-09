# bible-verses-server

a simple bible verse server that sends a reference and content text.

## route

verses are served on `/api/v1/random`

## sample response

```json
{
  "reference": "2 Corinthians 2:14",
  "text": "Now thanks be unto God, which always causeth us to triumph in Christ, and maketh manifest the savour of his knowledge by us in every place."
}
```
## Credits 
the data is taken from [here.](https://github.com/bcbooks/scriptures-json)
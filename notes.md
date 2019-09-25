## Testing

- change package.json 

"test": "cross-env DB_ENV=test jest --watch"

- change dbConfig: 

const environment = process.env.DB_ENV || "development";

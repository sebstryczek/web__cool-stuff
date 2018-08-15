# Usage

# Database

## Configuration
I decided to split configuration from knexfile, because I wanted to have configuration in db folder, and knexfile must be in root folder (when I change knexfile path, there is a problem with dotenv cwd() path).

`src/db/knexConfig.js` - knex configuration

`src/db/Model.js` - it uses knexConfig to make connection

`knexfile.js` - it is used for knex cli and migrations (it uses knexConfig.js)


## Migrations

### Create migration
```
knex migrate:make migration_name
```

### Create migration
```
knex migrate:make migration_name
```

### Run migration
```
knex migrate:latest
```

### Undo migration
```
knex migrate:rollback
```

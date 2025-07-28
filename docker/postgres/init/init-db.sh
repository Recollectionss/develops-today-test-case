#!/bin/bash
echo "** Started creating default DB and users"

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
  CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
EOSQL

echo "** Finished creating default DB and users"
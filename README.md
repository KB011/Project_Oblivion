# Initial Structure

Create a school directory system.

# First Steps - Migration

We are creating the first table for the database namely `Students` having columns id, firstName, lastName and Date of Birth. To do the migration we need to follow the steps below:

1. `npx sequelize-cli model:generate --name Student --attributes firstName:string,lastName:string,dob:string`
   This creates a `Migration` file and a `Model` file. We then edit both the files to include additional constraints for our table.

2. `npx sequelize-cli db:migrate`
   This runs the migration and our database is updated by Sequelize with the addition of the new table Students.

# Undoing Migrations

1. If we want to revert only the latest migration, we run the command `npx sequelize-cli db:migrate:undo`
2. If we want to revert all the migrations, we run `npx sequelize-cli db:migrate:undo:all`
3. If we want to revert to a specific migration, we run `npx sequelize-cli db:migrate:undo:all --to <migration-filename>`

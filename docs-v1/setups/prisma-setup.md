# Prisma Database Setup Guide

This guide explains how to set up and configure Prisma with PostgreSQL for our project.

## Understanding Prisma Components

Before we begin, it's important to understand the key components of Prisma:

1. **Prisma Schema**: The `schema.prisma` file in your `server/prisma` directory defines your database schema, relationships, and configurations.

2. **Prisma Client**: A type-safe database client generated based on your schema. It provides an API to query your database with full TypeScript support.

3. **Prisma Migrate**: A tool to create and manage database migrations based on changes to your Prisma schema.

4. **Prisma Studio**: A visual database browser that lets you view and edit data in your database.

## Database Setup Steps

### 1. Create PostgreSQL Database

First, create a PostgreSQL database for your project:

```bash
# Using pgAdmin:
# 1. Open pgAdmin
# 2. Right-click on "Servers" > "Create" > "Server"
# 3. Connect to your PostgreSQL server
# 4. Right-click on "Databases" > "Create" > "Database"
# 5. Name your database (e.g., "mar_pre_v1")
   
# Or using command line:
createdb mar_pre_v1
```

### 2. Configure Database Connection

Create or update the `.env` file in the server directory with your database connection string:

```bash
# Create/update .env file in the server directory
cd server
echo "DATABASE_URL=postgresql://postgres:2322@localhost:5432/mar_pre_v1" > .env
```

This connection string uses:
- Username: `postgres` (default PostgreSQL user)
- Password: `2322` (as requested)
- Host: `localhost`
- Port: `5432` (default PostgreSQL port)
- Database: `mar_pre_v1`

### 3. Install Prisma Client

Install the Prisma Client package in your server directory:

```bash
cd server
npm install @prisma/client
```

The `@prisma/client` package is what your application will use to interact with the database. It provides a type-safe API generated specifically for your schema.

### 4. Run Initial Migration

Now, run your first migration to create the database tables based on your schema:

```bash
cd server
npx prisma migrate dev --name initial
```

The `prisma migrate dev` command:
- Creates a new migration file in `prisma/migrations`
- Applies the migration to your database
- Generates the Prisma Client based on your schema
- The `--name initial` parameter gives a descriptive name to your migration

### 5. Generate Prisma Client

If you need to regenerate the Prisma Client without creating a migration (for example, after pulling changes), use:

```bash
npx prisma generate
```

This command reads your Prisma schema and generates the TypeScript client in `node_modules/@prisma/client`. The generated client is specific to your schema and provides type-safe access to your database.

## Understanding Prisma Commands

- **`prisma generate`**: Generates the Prisma Client based on your schema without changing the database. Use this after pulling schema changes or when you've manually edited the schema without structural changes (like adding comments, renaming fields using @@map, or adjusting attributes that don't affect the database structure).

- **`prisma migrate dev`**: Creates and applies a migration based on changes to your schema. This changes your database structure (adding/removing tables, columns, indexes, etc.) and generates the Prisma Client. This command is intended for development environments and should not be used in production.

- **`prisma migrate deploy`**: Applies existing migrations to the database without generating the client. This is used in production deployments where you want to update the database structure but the client generation happens during the build process separately. It won't break your app because you typically run a build step that includes `prisma generate` before deploying new code.

- **`prisma db push`**: Pushes the schema to the database without creating migrations. This is useful for prototyping or in environments where you don't need migration history (like development or testing). While it updates the database structure, it doesn't generate the client automatically, so you would need to run `prisma generate` separately to avoid breaking your app. Not recommended for production because you lose the ability to track, version, and roll back changes.

- **`prisma studio`**: Opens a visual editor for your database at http://localhost:5555. This is a development tool that doesn't affect your database structure or client.

## When to Use Each Command

| Command | When to Use | Affects Database | Generates Client | Creates Migration Files | Suitable for Production |
|---------|-------------|------------------|------------------|-------------------------|-------------------------|
| `prisma generate` | After schema changes that don't affect DB structure; After pulling code with schema changes | No | Yes | No | Yes |
| `prisma migrate dev` | During development when changing DB structure | Yes | Yes | Yes | No |
| `prisma migrate deploy` | In CI/CD pipelines; Production deployments | Yes | No | No (uses existing) | Yes |
| `prisma db push` | Rapid prototyping; Testing environments | Yes | No | No | No |
| `prisma studio` | Viewing/editing data during development | No (read-only by default) | No | No | No |

## Understanding Database Migrations

A **database migration** is a controlled, versioned change to your database schema. Migrations allow you to:

1. **Track changes**: Keep a history of how your database schema has evolved
2. **Version control**: Commit migration files to your repository so team members have the same database structure
3. **Roll back changes**: Revert to previous database states if needed
4. **Deploy safely**: Apply changes to production databases in a controlled manner

### Structural vs. Non-Structural Schema Changes

#### Structural Changes
These modify the actual database structure and require migrations or schema pushes:
- Adding or removing models (tables)
- Adding or removing fields (columns)
- Changing field types
- Adding or removing indexes or constraints
- Modifying relationships between models

#### Non-Structural Changes
These don't affect the database structure and only require regenerating the Prisma Client:
- Adding or modifying comments
- Renaming fields using `@@map` or `@map` attributes (without changing the underlying database column)
- Adjusting attributes that don't affect database structure (like `@default` values for new fields)
- Changing model or field names in the Prisma schema while keeping the database names the same

## Migrations vs. Schema Push

### Using Migrations (`prisma migrate dev` & `prisma migrate deploy`)

**Advantages:**
- Creates versioned migration files that track schema changes
- Allows rolling back to previous states
- Provides a clear history of database evolution
- Safer for production environments
- Supports team collaboration through version control

**When to use:**
- For production applications
- When working in teams
- When you need to track schema history
- For controlled deployments

### Using Schema Push (`prisma db push`)

**Advantages:**
- Simpler and faster for rapid development
- No migration files to manage
- Direct schema-to-database synchronization

**When to use:**
- During early development/prototyping
- For testing environments
- When migration history isn't important
- For quick iterations during development

**Important:** After using `prisma db push`, you must run `prisma generate` separately to update your Prisma Client.

## Avoiding Breaking Changes

To avoid breaking your application when using these commands:

1. **Development Workflow**:
   - Make schema changes
   - Run `prisma migrate dev` (updates DB and generates client)
   - Test your application

2. **Production Workflow**:
   - Make schema changes in development
   - Test thoroughly with migrations
   - In your CI/CD pipeline:
     - Run `prisma migrate deploy` (updates DB structure)
     - Run `prisma generate` (updates client)
     - Build and deploy your application

This separation ensures that your database structure and client remain in sync, preventing runtime type errors or missing fields that would break your application.

## Schema Refinement

Your imported schema is comprehensive, but you may want to expand it further:

1. **Review Current Schema**: Analyze the current schema to ensure it meets your needs
2. **Add Additional Tables**: Define any additional tables needed for your specific application
3. **Update Relationships**: Ensure all relationships between tables are correctly defined
4. **Run Migration**: After making changes, run another migration:
   ```bash
   npx prisma migrate dev --name schema_updates
   ```

## Using Prisma Client in Your Code

After generating the Prisma Client, you can use it in your server code:

```typescript
// server/src/services/userService.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getUserById(id: string) {
  return prisma.users.findUnique({
    where: { id }
  });
}

export async function createUser(data: any) {
  return prisma.users.create({
    data
  });
}
```

## Type Definitions Implementation

Following our "Conventional File Flow" approach:

1. **Create Backend Types**:
   ```bash
   mkdir -p server/src/types
   touch server/src/types/entities.ts
   touch server/src/types/requests.ts
   touch server/src/types/responses.ts
   ```

2. **Create Frontend Types**:
   ```bash
   mkdir -p client/src/types/entities
   touch client/src/types/entities/index.ts
   ```

3. **Implement Types**: Define types in these files based on your Prisma schema, following our hybrid approach

## Best Practices

1. **Keep the Prisma schema as the source of truth** for your data model
2. **Always use migrations** for schema changes in production
3. **Commit migration files** to version control
4. **Use transactions** for operations that modify multiple records
5. **Leverage Prisma's type safety** in your application code

By following this guide, you'll have a properly configured Prisma setup with PostgreSQL that follows best practices for database management and type safety. 
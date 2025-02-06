# Next.js 15 App Directory Configuration Issue

This repository demonstrates an uncommon bug related to configuring the app directory in Next.js 15.  Improper configuration can lead to unexpected rendering behavior or runtime errors.

## Bug Description
The provided `pages/index.js` file, a simple Next.js page, might produce unexpected results in Next.js 15 if the app directory isn't configured correctly. This could manifest as rendering failures, warnings, or inconsistencies with expected behavior.  This is particularly relevant for users migrating from older Next.js versions.

## Solution
The solution involves ensuring that the app directory is correctly configured according to Next.js 15's requirements.  This might involve creating the `app` directory, moving files, or adjusting `next.config.js` for certain configurations (e.g. experimental features).  Refer to the Next.js documentation for best practices and configurations.

## How to Reproduce
1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server using: `npm run dev`
4. Observe the behavior, comparing it with expected rendering behavior.  If using an older project, ensure migration to the `app` directory is correctly performed.
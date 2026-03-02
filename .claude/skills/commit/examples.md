# Commit Message Examples

## Bug Fix

```
Fix null pointer exception in user profile loader

Why:
- Users experienced crashes when viewing profiles with missing avatar images
- Application should gracefully handle missing optional data
- Improves reliability and user experience

How I knew:
- Error logs showed 50+ NullPointerException errors per day from ProfileLoader.java:145
- User support tickets mentioned "app crashes when opening some profiles"
- Sentry report linked crashes to missing avatar_url field in API response

```

## New Feature

```
Add input validation to login form

Why:
- Users can currently submit empty credentials causing backend errors
- Need to prevent invalid requests before they reach the API
- Improves user experience with immediate feedback

How I knew:
- Error logs showed 300+ validation failures per day from login endpoint
- User support tickets mentioned confusing "500 error" on empty submit
- Backend team requested client-side validation to reduce load

```

## Refactoring

```
Refactor database query to use prepared statements

Why:
- Current string concatenation is vulnerable to SQL injection
- Security audit flagged this as high-priority risk
- Need to follow secure coding standards

How I knew:
- Security scan report identified SQL injection vulnerability in UserRepository.java:78
- Code review comments pointed out unsafe query construction
- Similar pattern was exploited in related project last month

```

## Performance Improvement

```
Add database indexes to user search queries

Why:
- User search was taking 3-5 seconds on large datasets
- Need to support faster lookups as user base grows
- Database scans are not scalable

How I knew:
- APM metrics showed search endpoint p95 latency at 4.2 seconds
- Database slow query log flagged full table scans on users table
- Performance testing with 100k users showed linear degradation

```

## Documentation

```
Add API documentation for authentication endpoints

Why:
- New developers struggled to understand auth flow
- External partners needed clear integration guide
- Reduces support burden and onboarding time

How I knew:
- Three new team members asked same questions about OAuth flow
- Partner integration took 2 weeks due to unclear documentation
- Support tickets showed confusion about token refresh mechanism

```

## Configuration Change

```
Update rate limit threshold for API endpoints

Why:
- Current limit of 10 req/min is too restrictive for legitimate users
- Need to balance security with usability
- Power users hitting limits during normal usage

How I knew:
- Monitoring showed 200+ rate limit violations per day from verified accounts
- User feedback indicated frustration with "too many requests" errors
- Analysis showed legitimate use cases requiring 30-50 req/min

```

## Dependency Update

```
Upgrade React from 17.0.2 to 18.2.0

Why:
- Need concurrent rendering features for better UX
- React 17 approaching end of support
- Security vulnerabilities in transitive dependencies

How I knew:
- Dependabot alerts flagged 3 critical vulnerabilities in react-dom dependencies
- Product roadmap requires Suspense for data fetching
- React 17 maintenance mode announced for Q2 2024

```

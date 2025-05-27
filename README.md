# NoonExperiments Monorepo

This repository serves as a testing ground for React Native Expo applications and third-party library integrations. It is designed to:

- Experiment with various React Native features and capabilities
- Test third-party library implementations
- Provide reproducible examples for feature requests and bug reports
- Serve as a reference for common React Native development patterns

## Purpose

The main goal of this monorepo is to maintain a collection of isolated, well-documented experiments that can be used to demonstrate specific functionalities, reproduce issues, or showcase implementation approaches in React Native development.

## Project Structure

The monorepo consists of the following main components:

### Main Application

- `noonexperiments-expo-app`: The primary React Native Expo application where all experiments are implemented and run.

### Supplementary Projects

Additional projects that support the main application:

- `noonexperiments-firebase`: Firebase-related resources (emulators, Cloud Functions)
- `noonexperiments-backend`: Backend services and APIs
- Additional supporting projects as needed for specific experiments

Each supplementary project is designed to provide the necessary infrastructure and services to support various experiments in the main application.

## Branch Naming Convention

Each experiment should be in its own branch following the naming pattern:

```
experiments-[LIBRARY]-[SPECIFIC-FEATURE-OR-ISSUE]
```

Examples:

- `experiments-webview-post-message`
- `experiments-expo-share-intent`
- `experiments-firebase-deep-linking`
- `experiments-react-navigation-modal-stack`

This naming convention helps in quickly identifying the purpose and scope of each experiment branch.

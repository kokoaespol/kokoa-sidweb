# kokoa-sidweb

Movil App for Academic Sidweb site

## Dependencies

We assume that you have already installed [NodeJS](https://nodejs.org)

This project use **Ionic Framework v3.2.0**

1) `npm install -g ionic cordova`
2) `cd kokoa-sidweb`
3) `npm install`

## Add your API Key

Generate a key in your Sidweb profile, in the **src folder** create `auth.ts` file with this content:

```typescript
export const AUTH = {
    apiKey: 'YOUR API KEY'
}
```


## Run

`ionic serve`
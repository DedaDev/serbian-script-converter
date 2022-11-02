# Serbian script converter

Utility functions for converting cyrilic script to latin and vice versa

 - Typescript compatible

## Installation

```shell
npm i serbian-script-converter
```

## Usage

```ts
import { latinToCyrilic, cyrilicToLatin } from 'serbian-script-converter';

latinToCyrilic("Vino točim a vino ne pijem, srce imam osećanja krijem") 
//Вино точим а вино не пијем, срце имам осећања кријем

cyrilicToLatin("Усне имам ал' кога да љубим, кад си с другим а ја младост губим") 
// Usne imam al' koga da ljubim, kad si s drugim a ja mladost gubim
```
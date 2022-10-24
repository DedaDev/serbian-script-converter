# Serbian script converter

Utility functions for converting cyrilic script to latin and vice versa

 - Typescript compatible

## Usage

```ts
import { latinToCyrilic, cyrilicToLatin } from 'serbian-script-converter';

latinToCyrilic('Ti bi htela pesmom da ti kažem, koliko te srce moje voli') 
//Ти би хтела песмом да ти кажем, колико те срце моје воли

cyrilicToLatin('Као болан зору, као звеће росу, као очи своје, толико те воли срце моје') 
// Kao bolan zoru, kao cveće rosu, kao oči svoje, toliko te voli srce moje
```

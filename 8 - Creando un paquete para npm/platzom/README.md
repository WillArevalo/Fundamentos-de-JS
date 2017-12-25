# Platzom

Platzom es un idioma inventado para el curso de Fundamentos de Javascript de Platzi

##Descripcion de el idioma

* Si la palabra termina en "ar" se le quita esos dos caracteres
* Si la palabra inicia con z, se le añade "pe" al final
* Si la palabra traducida tiene diez o mas letras se debe partir a la mitad y unir con un guion
* Si la palabra original es un palindromo ninguna regla anterior cuenta y se devuelve la misma palabra intercalando mayusculas y minúsculas

## Instalación
```
npm install platzom
```

## Uso

```
import platzom from 'platzom'

platzom("Programar") //Program
platzom("Zarpar") //Zarppe
platzom("abecedario") //abece-dario
platzom("anitalavalatina") //AnItAlAvALaTiNa
```

## Creditos

- [Will Arevalo](https://willarevalo.github.io)

## Licencia

[MIT](https://opensource.org/licenses/MIT)
<h1 align="center"> MI LIBRO DE RECETAS </h1>

![Recipe Book](https://img.freepik.com/vector-premium/cocina-libro-recetas-ilustracion-comida-realista-3d_163454-189.jpg?w=740)

>En esta APP podras elegir recetas entre miles de opciones, seleccionando el tipo de dieta que desees.

### INSTRUCCIONES:
***

#### CREAR NUEVO USUARIO / LOGIN / LOGOUT
 * Primero deberás crear un nuevo usuario. Para ello debes elegir un nombre de usuario y una contraseña

><span style="color:grey"> _$ npm run dev newuser user password_</span>

<span style="color:green">ej: _$ npm run dev newuser Martin Perez_</span>

* Una vez creado el usuario podrás loguearte para comenzar

><span style="color:grey"> _$ npm run dev login user password_</span>

<span style="color:green">ej: _$ npm run dev login Martin Perez_</span>


* Al finalizar debes desloguearte 

><span style="color:grey"> _$ npm run dev logout user password_</span>

<span style="color:green">ej: _$ npm run dev logout Martin Perez_</span>



#### BUSCAR UNA RECETA
Existen miles de recetas disponibles en nuestro APP. Con el comando “find” podras encontrar la receta estas buscando, para ello deberas seleccionar entre las siguientes opciones, puede ser una opción, varias, o todas, pero al menos debes elegir una opcion:

|    diet      | mealType   |dishType   |cuisineType  | health           
|-----------   |---------   |-------    |--------     |--------
|balanced      |Breakfast   |Bread      |American     |alcohol-cocktail
|high-fiber    |Dinner      |Cereals    |Asian        |celery-free
|high-protein  |Lunch       |Desserts   |British      |egg-free
|low-carb      |Snack       |Drinks     |Caribbean    |fish-free
|low-fat       |Teatime     |Pancake    |Chinese      |gluten-free
|low-sodium    |            |Preps      |French       |keto-friendly
|              |            |Salad      |Indian       |low-potassium
|              |            |Sweets     |Italian      |low-sugar
|              |            |Sandwiches |Japanese     |no-oil-added
|              |            |Soup       |Kosher       |paleo
|              |            |Starter    |Mediterranean|pork-free
|              |            |           |Mexican      |vegan
|              |            |           |             |vegetarian


_Tambien puedes filtar por la cantidad de ingredientes: ej: ingr=5-8_

<u>Aquí te dejamos unos ejemplos:</u>


><span style="color:purple"> _$ npm run dev find diet=low-carb health=pork-free_</span>

><span style="color:purple"> _$ npm run dev find ingr=2-5 dishType=Salad mealType=Lunch_</span>

><span style="color:purple">_$ npm run dev find cuisineType=Mediterranean_</span>

***
#### GUARDAR LA RECETA EN NUESTRO  CUADERNO
Para poder almacenar nuestar receta deberas elegir el numero de la receta que quieras guardar junto con el comando addRecipe


><span style="color:red">_$ npm run dev addRecipe=15_</span>

Utilizando los comandos **find y addRecipe** podrás coleccionar todas las recetas que necesites en tu cuaderno
***
#### BUSCAR UNA RECETA Y SUS INGREDIENTES EN EL CUADERNO  
Podrás buscar las recetas guardadas en tu cuaderno y obtener la lista de ingredientes
Para ello deberar primero utilizar el comando “recipebook” para acceder a la lista de recetas almacenadas en nuestro cuaderno de recetas

><span style="color:turquoise">_$ npm run dev recipeBook_</span>

Alli podremos ver todas las recetas que hemos seleccionado y guardado en nuestro recetario.
Para poder obtener los ingredientes de una receta en particular, deberemos elegir el numero de la receta dentro de nuestro cuaderno de la siguiente manera:

><span style="color:turquoise">_$ npm run dev ingredients=6_</span>

***
#### CALORIAS EN NUESTRO CUADERNO DE RECETAS

🔥🔥Podras saber la cantidad de calorias totales acumuladas en todas las recetas guardadas para tener un control de tu dieta!🔥🔥

><span style="color:yellow">_$ npm run dev calories_</span>




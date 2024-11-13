<template>
     <div class="container mt-4 d-inline-grid justify-content-center">
        <nav class="nav nav-pills mb-4 d-flex justify-content-center" >
            <RouterLink to="/" class="nav-link" active-class="active" exact>Конвертер валют</RouterLink>
            <RouterLink to="/rates" class="nav-link" active-class="active">Курсы валют</RouterLink>
        </nav>
        <RouterView />
  </div>
</template>
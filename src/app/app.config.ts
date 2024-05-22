import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideHttpClient(), provideClientHydration(), provideFirebaseApp(() => initializeApp({"projectId":"school-fcaf7","appId":"1:247712420151:web:73fdd143f3a7745f868ab2","databaseURL":"https://school-fcaf7-default-rtdb.firebaseio.com","storageBucket":"school-fcaf7.appspot.com","apiKey":"AIzaSyDWp75FpG53LtxohQ0T4isl4NF0mwDtuVc","authDomain":"school-fcaf7.firebaseapp.com","messagingSenderId":"247712420151","measurementId":"G-E8NW12BYRF"})), provideDatabase(() => getDatabase())]
};

import { openDB } from 'idb';
import 'regenerator-runtime/runtime';

export const initdb = async () => {
    // create a new database named 'contact_db' which will use v1 of the database
    openDB('contact_db', 1, {
        // add db schema if it hasn't been initiaized
        upgrade(db) {
            if (db.objectStoreNames.contains('contacts')) {
                console.log('contacts store already exists');
                return;
            }
            // create new obj store for the data and give it a key name of 'id' that increments automatically
            db.createObjectStore('contacts', { keyPath: 'id', autoIncrement: true });
            console.log('contacts store created');
        }
    })
}

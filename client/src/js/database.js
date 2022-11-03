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

// export function getDb to GET to the db
export const getDb = async () => {
    console.log('Get from the database...');

    // create a connection to indexedDB db and the version we want to use
    const contactDb = await openDB('contact_db', 1);

    // create a new transaction and specify the store and data priveleges
    const tx = contactDb.transaction('contacts', 'readonly');

    // open up the desired object store
    const store = tx.objectStore('contacts');

    // use .getAll() method to get data in db
    const request = store.getAll();

    // get confirmation of the request
    const result = await request;
    console.log('result.value', result);
    return result;
};

export const postDb = async (name, email, phone, profile) => {
    console.log('POST to the database...');

    // create connection to db and specify the version 
    const contactDb = await openDB('contact_db', 1);

    // create a new transaction and specify the store and data priveleges
    const tx = contactDb.transaction('contacts', 'readwrite');

    // open up the desired object store
    const store = tx.objectStore('contacts');

    // use the .add() method on the store and pass in the content
    const request = store.add({ name: name, email: email, phone: phone, profile: profile });

    // get confirmation of the request
    const result = await request;
    console.log('🚀 - data saved to the database', result);
};

/* eslint-disable no-useless-catch */
import {
  collection,
  doc,
  query,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  serverTimestamp,
  getDoc,
  setDoc,
} from "firebase/firestore";
import { db } from "../config/firebase";

export const getDocuments = async (path, queryFilters) => {
  try {
    let documents = [];
    const collRef = queryFilters
      ? query(collection(db, path), ...queryFilters)
      : collection(db, path);

    const snapshot = await getDocs(collRef);
    snapshot.forEach((doc) => {
      documents.push({ id: doc.id, ...doc.data() });
    });
    return documents;
  } catch (error) {
    throw error;
  }
};

export const getDocumentById = async (path) => {
  try {
    const singleDoc = await getDoc(doc(db, path));
    return singleDoc.data();
  } catch (error) {
    throw error;
  }
};

export const onSanpshotDocuments = async (path) => {
  try {
    let documents = [];
    const collRef = collection(db, path);
    await onSnapshot(collRef, (snapshot) => {
      snapshot.forEach((doc) => {
        documents.push({ id: doc.id, ...doc.data() });
      });
    });
    return documents;
  } catch (error) {
    throw error;
  }
};

export const addDocument = async (path, docData) => {
  try {
    const collRef = collection(db, path);
    const addedItemRef = await addDoc(collRef, { ...docData, createdAt: serverTimestamp() });
    return addedItemRef.id;
  } catch (error) {
    throw error;
  }
};

export const deletDocument = async (path) => {
  try {
    await deleteDoc(doc(db, path));
  } catch (error) {
    throw error;
  }
};

export const updateDocument = async (path, docData) => {
  try {
    await updateDoc(doc(db, path), docData);
  } catch (error) {
    throw error;
  }
};

export const setDocument = async (path, docData) => {
  try {
    await setDoc(doc(db, path), docData);
  } catch (error) {
    throw error;
  }
};

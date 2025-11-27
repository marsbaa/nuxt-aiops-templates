/**
 * Firebase API helper using modular SDK.
 * Replace collection names and data shapes to match your domain.
 */
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  serverTimestamp,
} from 'firebase/firestore'
import { getApp } from 'firebase/app'

export interface {{EntityName}} {
  id?: string
  title: string
  description?: string
  createdAt?: Date
  updatedAt?: Date
}

const db = getFirestore(getApp())
const baseCollection = collection(db, '{{collectionName}}')

export async function list{{EntityNamePlural}}(): Promise<{{EntityName}}[]> {
  const snapshot = await getDocs(baseCollection)
  return snapshot.docs.map((d) => ({
    id: d.id,
    ...(d.data() as Omit<{{EntityName}}, 'id'>),
  }))
}

export async function create{{EntityName}}(payload: Omit<{{EntityName}}, 'id'>) {
  const docRef = await addDoc(baseCollection, {
    ...payload,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  })
  return docRef.id
}

export async function update{{EntityName}}(
  id: string,
  payload: Partial<Omit<{{EntityName}}, 'id'>>
) {
  const ref = doc(db, '{{collectionName}}', id)
  await updateDoc(ref, {
    ...payload,
    updatedAt: serverTimestamp(),
  })
  return id
}

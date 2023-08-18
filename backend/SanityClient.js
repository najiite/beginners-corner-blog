import {createClient} from "@sanity/client";

export const client = createClient({
  projectId: "7bmdehy7", // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
  apiVersion: '2023-05-03',
  useCdn: true, // `false` if you want to ensure fresh data
});
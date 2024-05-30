import { createClient } from "@/prismicio";
import dynamic from "next/dynamic";
import { PageDocument } from "../../../prismicio-types";

const HeaderNavigation = dynamic(
  () => import("@/components/HeaderNavigation"),
  {
    ssr: true,
  },
);

export default async function Header() {
  const client = createClient();

  const items = await Promise.all([
    client.getSingle("settings"),
    client.getAllByType("page"),
  ]);

 // const carKeyReplacementPages = await client.getAllByType(
 //   "car_key_replacement",
 // );

  let pages: PageDocument<string>[] = filterAndSortDocument(items[1]);

  const dropdownItems = await Promise.all(
    pages.map(async (page) => {
      return client.getAllByIDs(
        page.data.dropdown_items
          .map((item: any) => item.link.id)
          .filter((id) => id),
      );
    }),
  );

  const mutated = pages.map((page, i) => {
    return {
      ...page,
      data: {
        ...page.data,
        dropdown_items: dropdownItems[i],
      },
    };
  });

  return (
    <HeaderNavigation
      pages={mutated as any}
      settings={items[0]}
     // carKeyReplacementPages={carKeyReplacementPages as any}
    />
  );
}

function filterAndSortDocument(documents: any[]) {
  return documents
    .filter((a) => a.data.add_to_menu)
    .sort((a, b) => {
      const aDate = new Date(a.first_publication_date);
      const bDate = new Date(b.first_publication_date);

      return aDate.getTime() - bDate.getTime();
    });
}

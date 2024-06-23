import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Filter from "@/components/search/search-filter";

const SearchFilterDrawer = () => (
  <div className="md:hidden flex items-center w-full p-4 gap-2 mt-auto">
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="w-full" variant={"outline"}>
          Sort
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Sort</DrawerTitle>
        </DrawerHeader>
        <div className="flex flex-col items-center justify-center gap-2 p-5 group cursor-pointer pb-16">
          <span>Featured</span>
          <span>Discount</span>
          <span>Price high to low</span>
          <span>Price low to high</span>
        </div>
      </DrawerContent>
    </Drawer>

    <Sheet>
      <SheetTrigger asChild>
        <Button className="w-full" variant={"outline"}>
          Filter
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="max-h-[600px] overflow-scroll">
        <Filter />
      </SheetContent>
    </Sheet>
  </div>
);

export default SearchFilterDrawer;

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { NavMenu } from "./nav-menu";

export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger  asChild>
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className='p-5'>
          <h1 className="text-2xl font-bold">FanTech</h1>
        <NavMenu orientation="vertical" className="" />
      </SheetContent>
    </Sheet>
  );
};

import {SettingsIcon} from 'lucide-react';
import {PropsWithChildren, ReactElement} from 'react';
import LatticeSettings from '@/lattice/LatticeSettings';
import {Button} from '@/ui/button';
import {Label} from '@/ui/label';
import {DarkModeToggle} from './DarkModeToggle';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/ui/sheet';

function Settings(): ReactElement {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="h-6 w-6 p-0.5">
          <SettingsIcon className="h-full w-full" />
          <span className="sr-only">Settings</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Settings</SheetTitle>
          <SheetDescription>
            Make changes to your settings here. Click update when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="mb-6">
            <SettingsSectionLabel>Display</SettingsSectionLabel>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="dark-mode">Dark Mode</Label>
              <DarkModeToggle id="dark-mode" />
            </div>
          </div>
          <SettingsSectionLabel>Lattice Configuration</SettingsSectionLabel>
          <LatticeSettings />
        </div>
      </SheetContent>
    </Sheet>
  );
}

function SettingsSectionLabel({children}: PropsWithChildren): ReactElement {
  return <div className="mb-3 font-semibold">{children}</div>;
}

export {Settings};

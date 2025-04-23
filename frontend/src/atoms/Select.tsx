import { Listbox, ListboxButton, ListboxOption, ListboxOptions, ListboxOptionsProps, ListboxProps } from '@headlessui/react';
import { ReactNode } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export type SelectProps = Omit<ListboxProps, 'children'> & { children: ListboxOptionsProps['children'] };

export const Select = ({ children, ...props }: SelectProps) => (
  <Listbox {...props}>
    <div className="relative">
      <ListboxButton className="w-full text-left bg-background cursor-default rounded border px-3 py-2 pr-10 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary">
        {props.value}
        <ChevronDownIcon
            className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-primary"
            aria-hidden="true"
          />
      </ListboxButton>

      <ListboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded bg-white py-1 text-sm shadow-lg ring-1 ring-black/5 focus:outline-none">
        {children}
      </ListboxOptions>
    </div>
  </Listbox>
);

export const SelectOption = ({ value, children }: { value: string; children: ReactNode }) => (
  <ListboxOption
    value={value}
    className={({ active, selected }) =>
      `cursor-default select-none px-4 py-2 rounded transition-colors duration-100 ${
        selected ? 'bg-primary text-white' : active ? 'bg-gray-100' : 'text-gray-900'
      }`
    }
  >
    {children}
  </ListboxOption>
);
import { Input, type InputProps } from "@workspace/ui/components/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export default function InputDemo() {


  return (
    <div className="max-w-[300px] mx-auto mt-5">
      <div className="flex flex-col gap-8">
        <Input 
          type="email"
          id="email1"
          label="Email"
          placeholder="name@email.com"
          hint="This is a text hint"
          helpIcon={true}
        />
         <Input 
          type="email"
          id="email2"
          label="Email"
          placeholder="name@email.com"
          hint="This is a text hint"
          mailIcon={true}
          helpIcon={true}
        />
                 <Input 
          type="email"
          id="email3"
          label="Email"
          placeholder="name@email.com"
          hint="This is a text hint"
          helpIcon={true}
        />
                 <Input 
          type="email"
          id="email4"
          label="Email"
          placeholder="name@email.com"
          hint="This is a text hint"
          helpIcon={true}
        />
      </div>
    </div>
  );
}


import { Button, Checkbox, Label, TextInput } from 'flowbite-react';

export default function LoginCard() {
  return (
    <form className="max-w-sm bg-black bg-opacity-40 p-4 rounded-lg shadow-md" style={{ width: '420px' }}>
        <h1 className='mb-3 block text-white text-center font-bold text-2xl'>Login</h1>
      <div>
        {/* <div className="mb-2 block">
          <Label className='text-white ' htmlFor="email1" value="Your email" />
        </div> */}
        <TextInput className='mb-3 block' id="email1" type="email" placeholder="Your Email" required />
      </div>
      <div>
        {/* <div className="mb-2 block">
          <Label htmlFor="password1" value="Your password" />
        </div> */}
        <TextInput className='mb-3 block' id="password1" type="Password" placeholder="Password" required />
      </div>
      <div className="flex items-center gap-2 mb-2 block">
        <Checkbox id="remember" />
        <Label className='text-white' htmlFor="remember">Remember me</Label>
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}

'use client';
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { useRouter } from 'next/navigation';

export default function Login() {

    const router = useRouter();
    return (
            <Card className="m-auto mt-10 sm:w-auto md:w-1/3 ">
                <CardHeader className="flex items-start gap-2">
                    <CardTitle>Login</CardTitle>
                    <CardDescription>Enter your credentials or <a className="underline cursor-pointer">Sign Up</a></CardDescription>

                </CardHeader>
                <CardContent className="flex items-start">
                    <form className="grid gap-4 w-full md:gap-6">
                        <div className="grid gap-2">
                            <label className="text-base">
                                User
                            </label>
                            <Input id="name" placeholder="username" />
                        </div>
                        <div className="grid gap-2">
                            <label className="text-base">
                                Password
                            </label>
                            <Input id="pass" placeholder="password" type="password" />
                        </div>
                        <Button size="lg"
                        onClick={
                            (e) => {
                                e.preventDefault();
                            if (checkCredentials()) {
                                router.push('/Dashboard');
                            }
                        }
                        }>Login</Button>
                    </form>
                </CardContent>
            </Card>
    );
}


function checkCredentials() {
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const passwordInput = document.getElementById('pass') as HTMLInputElement;
    if (nameInput && passwordInput && nameInput.value === 'admin' && passwordInput.value === 'admin') {
        console.log('Credentials are correct');
        return true;
    }
}

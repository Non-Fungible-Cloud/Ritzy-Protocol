import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";

export default function Login() {
    return (
            <Card className="m-auto mt-10 w-1/3">
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
                            <Input id="creator" placeholder="password" />
                        </div>
                        <Button size="lg">Login</Button>
                    </form>
                </CardContent>
            </Card>
    );
}
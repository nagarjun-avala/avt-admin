"use client"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { useDispatch, useSelector } from 'react-redux'

import { login } from "@/redux/actions/authAction"
import Link from "next/link"
import { AppDispatch, RootState } from '@/redux/store';
import { Label } from "@/components/ui/label"
import {  LoginAdmin } from "@/lib/types"

interface NotifyTypes {
  notify: {

    error?: string;

  };
}

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  // TODO: Empty init data after completion of login development *Authentication* 
  const initalState: Partial<LoginAdmin> = {
    username: "admin",
    password: "Admin@123",
    // Add other properties of Admin type if needed
  }


  const notify = useSelector((state: RootState) => state.notify) as NotifyTypes['notify']

  const [userData, setUserData] = useState(initalState)
  const [typePass, setTypePass] = useState(true)
  const { username, password } = userData

  const dispatch = useDispatch<AppDispatch>()


  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(userData)
    dispatch(login(userData))    
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Welcome back</CardTitle>
        </CardHeader>
        <CardContent>
          
          <form onSubmit={handleSubmit}>
            <div className="grid gap-6 mb-5">
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    name="username"
                    type="text"
                    value={username}
                    autoComplete="off"
                    onChange={handleChangeInput}
                    required
                  />
                </div>
                <div className="grid gap-2 relative">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                  </div>
                  <Input
                    id="password"
                    name="password"
                    type={typePass ? "password" : "text"}
                    value={password}
                    onChange={handleChangeInput}
                    required />
                  <small className="cursor-pointer absolute top-[70%] right-2 translate-y-[-50%] opacity-50" onClick={() => setTypePass(!typePass)}>{typePass ? "Show" : "Hide"}</small>
                </div>
                {notify?.error && <p
                  className={cn("text-sm text-center font-medium text-destructive")}
                  {...props}
                >
                  ! {notify?.error}
                </p>}
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4">
        By clicking continue, you agree to our <Link className="hover:text-primary" href="#">Terms of Service</Link>{" "}
        and <Link className="hover:text-primary" href="/#app">Privacy Policy</Link>.
      </div>
    </div>
  )
}

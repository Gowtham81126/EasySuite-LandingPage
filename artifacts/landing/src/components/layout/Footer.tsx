import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground opacity-80">
                <span className="font-display font-bold">ES</span>
              </div>
              <span className="font-display font-bold text-lg tracking-tight">Easy Suite</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Building the easy way to share space, energy, and resources.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">ParkEasy</li>
              <li className="text-muted-foreground">ChargeEasy</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Easy Suite. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
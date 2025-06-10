import {
  Box,
  Container,
  Typography,
  Grid,
  Link as MUILink,
} from "@mui/material";
import {
  Facebook,
  Instagram,
  Pinterest,
  Phone,
  Email,
} from "@mui/icons-material";

export default function Footer() {
  return (
    <footer className="border-t border-foreground/10 bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-foreground/80">Email: info@zumerscake.com</p>
            <p className="text-foreground/80">Phone: (123) 456-7890</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Hours</h3>
            <p className="text-foreground/80">Monday - Friday: 9am - 6pm</p>
            <p className="text-foreground/80">Saturday: 10am - 4pm</p>
            <p className="text-foreground/80">Sunday: Closed</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="text-foreground/80 hover:text-foreground">
                Instagram
              </a>
              <a href="#" className="text-foreground/80 hover:text-foreground">
                Facebook
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-foreground/10 text-center text-foreground/60">
          <p>
            &copy; {new Date().getFullYear()} Zumers&apos;s Cake. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

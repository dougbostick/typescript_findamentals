interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
  imageUrl?: string;
}

interface Image {
  url: string;
  size: { width: number; height: number };
}

interface Product {
  id: string;
}

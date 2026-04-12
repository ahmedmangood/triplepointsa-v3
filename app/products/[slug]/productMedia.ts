import type { Product } from "@/lib/products";

export function resolveProductGallery(product: Product): string[] {
  const optionalGallery = (product as Product & { gallery?: string[] }).gallery;
  const rawGallery =
    optionalGallery && optionalGallery.length > 0
      ? optionalGallery
      : [product.image];

  if (rawGallery.length > 1) {
    return rawGallery;
  }

  const image = product.image;

  if (image.startsWith("/services/meetingroom/")) {
    return [image, "/services/meetingroom/08.webp", "/services/meetingroom/011.webp"];
  }
  if (image.startsWith("/services/queuesystem/")) {
    return [image, "/services/queuesystem/02.webp", "/services/queuesystem/03.webp"];
  }
  if (image.startsWith("/services/securitysystem/")) {
    return [image, "/services/securitysystem/02.webp", "/services/securitysystem/04.webp"];
  }
  if (image.startsWith("/services/infrastructure/")) {
    return [
      image,
      "/services/infrastructure/network3-1.webp",
      "/services/infrastructure/network5-1.webp",
    ];
  }
  if (image.startsWith("/services/smarthome/")) {
    return [image, "/services/smarthome/02.webp", "/services/smarthome/03.webp"];
  }
  if (image.startsWith("/products/meeting/")) {
    return [
      image,
      "/products/meeting/SeeUp4H.webp",
      "/products/meeting/SeeUp4c.webp",
      "/products/meeting/TB5KIT.webp",
      "/products/meeting/TB5WKIT.webp",
      "/products/meeting/triplepod.webp",
      "/products/meeting/triple6x.webp",
      "/products/meeting/triple20x.webp",
    ];
  }

  return [image];
}

export function resolveProductSlides(product: Product): string[] {
  return (
    (product as Product & { slide?: string[]; slider?: string[] }).slide ??
    (product as Product & { slide?: string[]; slider?: string[] }).slider ??
    []
  );
}

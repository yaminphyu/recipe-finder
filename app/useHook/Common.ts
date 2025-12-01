export const getPageNumbers = ({
  totalPages, currentPage,
}: {
  totalPages: number;
  currentPage: number;
}) => {
  const pages = [];
  const maxVisible = 5;

  if (totalPages <= maxVisible) {
    for (let p = 1; p <= totalPages; p++) {
      pages.push(p);
    }
    return pages;
  }

  // Always show first page
  pages.push(1);

  // If currentPage > 3, show left dots
  if (currentPage > 3) {
    pages.push("left-dots");
  }

  // Middle pages: currentPage-1, currentPage, currentPage+1
  for (let p = currentPage - 1; p <= currentPage + 1; p++) {
    if (p > 1 && p < totalPages) {
      pages.push(p);
    }
  }

  // If currentPage < totalPages - 2, show right dots
  if (currentPage < totalPages - 2) {
    pages.push("right-dots");
  }

  // Always show last page
  if (totalPages > 1) {
    pages.push(totalPages);
  }
  
  return pages;
};
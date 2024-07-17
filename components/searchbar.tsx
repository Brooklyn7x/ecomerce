'use client'

import { useState, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X, Loader2 } from "lucide-react";

const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [search, setSearch] = useState(searchParams.get('q') || '');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(() => {
      const params = new URLSearchParams(searchParams);
      if (search.trim()) {
        params.set('search', search.trim());
      } else {
        params.delete('search');
      }
      router.push(`/search?${params.toString()}`);
    });
  };

  const clearSearch = () => {
    setSearch("");
    startTransition(() => {
      const params = new URLSearchParams(searchParams);
      params.delete('search');
      router.push(`/search?${params.toString()}`);
    });
  };

  return (
    <form onSubmit={handleSearch} className="relative w-full max-w-xl mx-auto">
      <div className="relative">
        <Input
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Search products..."
          className="w-full pl-10 pr-24 h-12 rounded-full shadow-sm focus:ring-2 focus:ring-primary"
        />
        <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
        {search && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="absolute right-16 top-1/2 transform -translate-y-1/2 hover:bg-transparent"
            onClick={clearSearch}
          >
            <X className="h-5 w-5 text-muted-foreground hover:text-primary" />
          </Button>
        )}
        <Button 
          type="submit"
          disabled={isPending}
          className="absolute right-1 top-1/2 transform -translate-y-1/2 h-10 px-4 rounded-full bg-primary hover:bg-primary/90"
        >
          {isPending ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <>
              <Search className="w-5 h-5" />
              <span className="ml-2 hidden sm:inline">Search</span>
            </>
          )}
        </Button>
      </div>
    </form>
  );
};

export default SearchBar;
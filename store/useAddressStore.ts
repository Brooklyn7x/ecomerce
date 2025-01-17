import { getUserAddresses } from "@/lib/actions/address";
import { Address } from "@/type";
import { create } from "zustand";

interface AddressStore {
  addresses: Address[];
  selectedAddress: Address | null;
  isLoading: boolean;
  error: string | null;
  fetchAddresses: (userId: number) => void;
  selectAddress: (address: Address) => void;
}

export const useAddressStore = create<AddressStore>((set) => ({
  addresses: [],
  selectedAddress: null,
  isLoading: false,
  error: null,
  fetchAddresses: async (userId: number) => {
    set({ isLoading: true, error: null });
    try {
      const { addresses } = await getUserAddresses({ userId });
      set({ addresses, isLoading: false });
    } catch (error) {
      set({ error: "Failed to fetch addresses", isLoading: false });
    }
  },
  selectAddress: (address: Address) => set({ selectedAddress: address }),
}));

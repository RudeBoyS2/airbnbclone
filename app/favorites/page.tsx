import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";

import { getCurrentUser } from "../actions/getCurrentUser";
import getFavoriteListings from "../actions/getFavoriteListings";
import FavoritesClient from "./FavoritesClient";

const FavoritePage = async () => {
    const currentUser = await getCurrentUser();
    const listings = await getFavoriteListings();

    if (listings.length === 0) {
        return (
            <ClientOnly>
                <EmptyState title="No favorites" subtitle="You have no favorites" />
            </ClientOnly>
        );
    }

    if (!currentUser) {
        return (
            <ClientOnly>
                <EmptyState title="Unauthorized" subtitle="Please login" />
            </ClientOnly>
        );
    }

    return (
        <ClientOnly>
            <FavoritesClient listings={listings} currentUser={currentUser} />
        </ClientOnly>
    )
}

export default FavoritePage
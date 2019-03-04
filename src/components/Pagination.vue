<template>
    <nav v-if="shouldShowPagination">
        <slot name="tpagination" :pageClicked="pageClicked" :pagination="pagination" :hasFirst="hasFirst" :hasFirstEllipsis="hasFirstEllipsis" :hasLastEllipsis="hasLastEllipsis" :hasLast="hasLast" :isActive="isActive">
            <ul :class="fullPaginationUlClass">
                <li :class="fullPaginationLiPrevClass">
                    <slot name="pprev" :pageClicked="pageClicked" :pagination="pagination">
                        <a :class="{ disabled: pagination.currentPage === 1 }" @click="pageClicked( pagination.currentPage - 1 )">
                            <i class="left chevron icon">«</i>
                        </a>
                    </slot>
                </li>
                <li v-if="hasFirst" :class="fullPaginationLiFirstClass">
                    <slot name="pfirst" :pageClicked="pageClicked">
                        <a class="page-link" @click="pageClicked(1)">1</a>
                    </slot>
                </li>
                <li v-if="hasFirstEllipsis" :class="fullPaginationLiEllipsisClass">
                    <slot name="pellipsis">
                        <span class="pagination-ellipsis">&hellip;</span>
                    </slot>
                </li>
                <li :class="[ isActive(page) ? 'active' : '', page === '...' ? 'disabled' : '', ...fullPaginationLiPageClass ]" v-for="page in pages" :key="page">
                    <slot name="ppage" :pageClicked="pageClicked" :page="page">
                        <a class="page-link" @click="pageClicked(page)">{{ page }}</a>
                    </slot>
                </li>
                <li v-if="hasLastEllipsis" :class="fullPaginationLiEllipsisClass">
                    <slot name="pellipsis">
                        <span class="pagination-ellipsis">&hellip;</span>
                    </slot>
                </li>
                <li v-if="hasLast" class="page-item" :class="fullPaginationLiLastClass">
                    <slot name="plast" :pageClicked="pageClicked" :pagination="pagination">
                        <a class="page-link" @click="pageClicked(pagination.totalPages)">{{pagination.totalPages}}</a>
                    </slot>
                </li>
                <li :class="fullPaginationLiNextClass">
                    <slot name="pnext" :pageClicked="pageClicked" :pagination="pagination">
                        <a :class="{ disabled: pagination.currentPage === pagination.totalPages }" @click="pageClicked( pagination.currentPage + 1 )">
                            <i class="right chevron icon">»</i>
                        </a>
                    </slot>
                </li>
            </ul>
        </slot>
    </nav>
</template>

<script>

import { classList } from '../helpers';
import settings from '../settings';

export default {
    props: {
        pagination: {
            type: Object,
            default: () => ({}),
        },
        paginationUlClass: { default: () => settings.paginationUlClass },
        paginationLiFirstClass: { default: () => settings.paginationLiFirstClass },
        paginationLiLastClass: { default: () => settings.paginationLiLastClass },
        paginationLiEllipsisClass: { default: () => settings.paginationLiEllipsisClass },
        paginationLiPrevClass: { default: () => settings.paginationLiPrevClass },
        paginationLiNextClass: { default: () => settings.paginationLiNextClass },
        paginationLiPageClass: { default: () => settings.paginationLiPageClass },
    },

    computed: {
        pages() {
            return this.pagination.totalPages === undefined
                ? []
                : this.pageLinks();
        },

        hasFirst() {
            return this.pagination.currentPage >= 4 || this.pagination.totalPages < 10
        },

        hasLast() {
            return this.pagination.currentPage <= this.pagination.totalPages - 3 || this.pagination.totalPages < 10
        },

        hasFirstEllipsis() {
            return this.pagination.currentPage >= 4 && this.pagination.totalPages >= 10
        },

        hasLastEllipsis() {
            return this.pagination.currentPage <= this.pagination.totalPages - 3 && this.pagination.totalPages >= 10
        },

        shouldShowPagination() {
            if (this.pagination.totalPages === undefined) {
                return false;
            }

            if (this.pagination.count === 0) {
                return false;
            }

            return this.pagination.totalPages > 1;
        },
        fullPaginationUlClass() {
            return classList(this.paginationUlClass);
        },
        fullPaginationLiFirstClass() {
            return [this.isActive(1) ? 'active' : '', ...classList(this.paginationLiFirstClass)];
        },
        fullPaginationLiLastClass() {
            return [this.isActive(this.pagination.totalPages) ? 'active' : '', ...classList(this.paginationLiLastClass)];
        },
        fullPaginationLiEllipsisClass() {
            return classList(this.paginationLiEllipsisClass);
        },
        fullPaginationLiPrevClass() {
            return [this.pagination.currentPage === 1 ? 'disabled' : '', ...classList(this.paginationLiPrevClass)];
        },
        fullPaginationLiNextClass() {
            return [this.pagination.currentPage === this.pagination.totalPages ? 'disabled' : '', ...classList(this.paginationLiNextClass)];
        },
        fullPaginationLiPageClass() {
            return classList(this.paginationLiPageClass);
        },
    },

    methods: {
        isActive(page) {
            const currentPage = this.pagination.currentPage || 1;

            return currentPage === page;
        },

        pageClicked(page) {
            if (page === '...' ||
                page === this.pagination.currentPage ||
                page > this.pagination.totalPages ||
                page < 1) {
                return;
            }

            this.$emit('pageChange', page);
        },

        pageLinks() {
            const pages = [];

            let left = 2;
            let right = this.pagination.totalPages - 1;

            if (this.pagination.totalPages >= 10) {
                left = Math.max(1, this.pagination.currentPage - 2);
                right = Math.min(this.pagination.currentPage + 2, this.pagination.totalPages);
            }

            for (let i = left; i <= right; i++) {
                pages.push(i);
            }

            return pages;
        },
    },
};
</script>

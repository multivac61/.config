return {

    -- add C to treesitter
    {
        "nvim-treesitter/nvim-treesitter",
        opts = function(_, opts)
            vim.list_extend(opts.ensure_installed, { "c" })
        end,
    },

    -- correctly setup mason lsp / dap extensions
    {
        "williamboman/mason.nvim",
        opts = function(_, opts)
            vim.list_extend(opts.ensure_installed, { "clangd", "clang-format" })
        end,
    },
}

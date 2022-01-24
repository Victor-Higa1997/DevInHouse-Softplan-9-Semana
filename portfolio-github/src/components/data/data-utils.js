
export function mapToRepoObject(repoList) {
    return repoList.map((githubRepo) => {
        return {
            id: githubRepo.id,
            titulo: githubRepo.full_name,
            descricao: githubRepo.description,
            destacar: true
        }
    })
}


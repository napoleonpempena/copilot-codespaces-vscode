function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'modulew/skills-member.html',
    controller: 'SkillsMemberController',
    controllerAs: 'vm',
    bindToController: true,
    scope: {
      member: '='
    }
  };
}
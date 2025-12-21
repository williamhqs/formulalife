function LessonScreen({ lesson }) {
  const [state, setState] = useState(lesson.initialState);
  const engine = useMemo(() => new FormulaEngine(lesson.rule), [lesson.rule]);

  const onAction = async (action: Action) => {
    const commands = mapActionToCommands(action);
    await runAnimation(commands);
    setState((prev) => engine.applyAction(prev, action));
  };

  return (
    <>
      <ObjectGroup count={state.objects} onAction={onAction} />
      <FormulaView formula={engine.toFormula(state)} />
    </>
  );
}

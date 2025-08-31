import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../UI/Card";
import { Button } from "../UI/Button";
import { Progress } from "../UI/Progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../UI/Select";
import { Play, Pause, RotateCcw, Coffee, Target, Clock, Settings } from "lucide-react";


export const StudyTimer = () => {
  const [mode, setMode] = useState('pomodoro');
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes in seconds
  const [sessionType, setSessionType] = useState('work');
  const [sessionsCompleted, setSessionsCompleted] = useState(0);
  const [customMinutes, setCustomMinutes] = useState(25);

  const sessionTimes = {
    work: 25 * 60,
    shortBreak: 5 * 60,
    longBreak: 15 * 60,
  };

  useEffect(() => {
    let interval;
    
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isRunning) {
      // Session completed
      setIsRunning(false);
      if (mode === 'pomodoro') {
        handlePomodoroSessionEnd();
      }
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft, mode]);

  const handlePomodoroSessionEnd = () => {
    if (sessionType === 'work') {
      setSessionsCompleted(prev => prev + 1);
      const nextSession = sessionsCompleted + 1;
      if (nextSession % 4 === 0) {
        setSessionType('longBreak');
        setTimeLeft(sessionTimes.longBreak);
      } else {
        setSessionType('shortBreak');
        setTimeLeft(sessionTimes.shortBreak);
      }
    } else {
      setSessionType('work');
      setTimeLeft(sessionTimes.work);
    }
  };

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    if (mode === 'pomodoro') {
      setTimeLeft(sessionTimes[sessionType]);
    } else if (mode === 'custom') {
      setTimeLeft(customMinutes * 60);
    } else {
      setTimeLeft(0);
    }
  };

  const changeMode = (newMode) => {
    setMode(newMode);
    setIsRunning(false);
    if (newMode === 'pomodoro') {
      setSessionType('work');
      setTimeLeft(sessionTimes.work);
    } else if (newMode === 'custom') {
      setTimeLeft(customMinutes * 60);
    } else {
      setTimeLeft(0);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getProgress = () => {
    if (mode === 'stopwatch') return 0;
    const totalTime = mode === 'pomodoro' ? sessionTimes[sessionType] : customMinutes * 60;
    return ((totalTime - timeLeft) / totalTime) * 100;
  };

  const getSessionIcon = () => {
    switch (sessionType) {
      case 'work':
        return <Target className="w-5 h-5" />;
      case 'shortBreak':
      case 'longBreak':
        return <Coffee className="w-5 h-5" />;
      default:
        return <Clock className="w-5 h-5" />;
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Timer Mode Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Study Timer
          </CardTitle>
          <CardDescription>
            Choose your preferred study method and stay focused
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-2 mb-4">
            <Button
              variant={mode === 'pomodoro' ? 'default' : 'outline'}
              onClick={() => changeMode('pomodoro')}
              className="btn-cosmic"
            >
              Pomodoro
            </Button>
            <Button
              variant={mode === 'custom' ? 'default' : 'outline'}
              onClick={() => changeMode('custom')}
            >
              Custom
            </Button>
            <Button
              variant={mode === 'stopwatch' ? 'default' : 'outline'}
              onClick={() => changeMode('stopwatch')}
            >
              Stopwatch
            </Button>
          </div>

          {mode === 'custom' && (
            <div className="mb-4">
              <Select
                value={customMinutes.toString()}
                onValueChange={(value) => setCustomMinutes(parseInt(value))}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="15">15 minutes</SelectItem>
                  <SelectItem value="25">25 minutes</SelectItem>
                  <SelectItem value="30">30 minutes</SelectItem>
                  <SelectItem value="45">45 minutes</SelectItem>
                  <SelectItem value="60">1 hour</SelectItem>
                  <SelectItem value="90">1.5 hours</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Timer Display */}
      <Card>
        <CardContent className="pt-6">
          <div className="text-center space-y-6">
            {mode === 'pomodoro' && (
              <div className="flex justify-center">
                <span  className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors 
                  focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80  gap-2 ">
                  {getSessionIcon()}
                  {sessionType === 'work' && 'Work Session'}
                  {sessionType === 'shortBreak' && 'Short Break'}
                  {sessionType === 'longBreak' && 'Long Break'}
                </span>
              </div>
            )}

            <div className="text-6xl font-mono font-bold text-cosmic">
              {formatTime(timeLeft)}
            </div>

            {mode !== 'stopwatch' && (
              <Progress value={getProgress()} className="h-3" />
            )}

            <div className="flex justify-center gap-4">
              <Button
                onClick={toggleTimer}
                size="lg"
                className="btn-cosmic min-w-[120px]"
              >
                {isRunning ? (
                  <>
                    <Pause className="w-5 h-5 mr-2" />
                    Pause
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5 mr-2" />
                    Start
                  </>
                )}
              </Button>
              
              <Button onClick={resetTimer} variant="outline" size="lg">
                <RotateCcw className="w-5 h-5 mr-2" />
                Reset
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Statistics */}
      {mode === 'pomodoro' && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Today's Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-cosmic">{sessionsCompleted}</div>
                <div className="text-sm text-muted-foreground">Sessions Completed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-nebula-green">
                  {Math.floor(sessionsCompleted / 4)}
                </div>
                <div className="text-sm text-muted-foreground">Cycles Finished</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-stellar-pink">
                  {Math.round((sessionsCompleted * 25) / 60)}h
                </div>
                <div className="text-sm text-muted-foreground">Focus Time</div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};